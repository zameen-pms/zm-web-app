import { FC, useState } from "react";
import Modal from "../../../../features/ui/modal/Modal";
import { StyledImageGallery, StyledImageRow } from "./Properties.styled";
import { Property } from "../../../../features/types/Property";
import FileUpload from "../../../../features/ui/fileUpload/FileUpload";
import { formatFileName } from "../../../../features/utils/formatFileName";
import uploadAsset from "../../../../features/api/assets/uploadAsset";
import updatePropertyById from "../../../../features/api/property/updatePropertyById";
import { getImageUrl } from "../../../../features/utils/getImageUrl";
import {
	MdDelete,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from "react-icons/md";
import removeAssetByKey from "../../../../features/api/assets/removeAssetByKey";
import Button from "../../../../features/ui/button/Button";

interface OverviewImagesProps {
	property: Property;
	fetchProperty: () => Promise<void>;
}

const PropertyOverviewImages: FC<OverviewImagesProps> = ({
	property,
	fetchProperty,
}) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = async (files) => {
		try {
			setIsLoading(true);
			const { images, _id: propertyId } = property;

			const newImages = [];
			for (let file of files) {
				const name = formatFileName(file.name);
				if (!images.some((image) => image.name === name)) {
					const { data: key } = await uploadAsset(file);
					const newImage = {
						key,
						name,
						description: "",
					};
					newImages.push(newImage);
				}
			}

			if (newImages.length > 0) {
				await updatePropertyById(propertyId, {
					images: [...property.images, ...newImages],
				});
			}

			await fetchProperty();
		} catch (err) {
			alert(`There was an error uploading your images: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteImage = async (key: string) => {
		if (isLoading) return;
		try {
			if (!confirm("Are you sure you want to delete this image?")) return;
			setIsLoading(true);
			const images = property.images.filter((image) => image.key !== key);
			await updatePropertyById(property._id, {
				images,
			});
			await removeAssetByKey(key);
			await fetchProperty();
		} catch (err) {
			alert(`Unable to delete image: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const shiftImageToIndex = async (key: string, toIndex: number) => {
		try {
			setIsLoading(true);

			const { images } = property;

			const [image] = images.filter((img) => img.key === key);
			const otherImages = images.filter((img) => img.key !== key);

			let targetIndex = toIndex;
			if (targetIndex < 0) targetIndex = 0;
			if (targetIndex >= images.length) targetIndex = images.length - 1;

			const newImages = [];
			for (let i = 0; i < images.length; i++) {
				if (i === targetIndex) {
					newImages.push(image);
				} else {
					newImages.push(otherImages.shift());
				}
			}

			await updatePropertyById(property._id, {
				images: newImages,
			});
			await fetchProperty();
		} catch (err) {
			alert(`Unable to shift image: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const addDescription = async (index: number) => {
		try {
			setIsLoading(true);

			const images = [...property.images];
			const description = prompt("Add a description for this image:");
			images[index] = {
				...images[index],
				description,
			};

			await updatePropertyById(property._id, {
				images,
			});
			await fetchProperty();
		} catch (err) {
			console.log(err.message);
			alert("Unable to add description.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Modal gap={2}>
			<div className="row justify-sb">
				<h2>Property Images</h2>
				<FileUpload
					multiple
					onChange={handleChange}
					text="Upload Image(s)"
					isLoading={isLoading}
				/>
			</div>
			<StyledImageGallery>
				{property.images.map((image, index) => (
					<StyledImageRow key={index}>
						<div className="row gap-1">
							<div className="move-img">
								<MdKeyboardArrowUp
									onClick={() =>
										shiftImageToIndex(image.key, index - 1)
									}
								/>
								<MdKeyboardArrowDown
									onClick={() =>
										shiftImageToIndex(image.key, index + 1)
									}
								/>
							</div>
							<img
								src={getImageUrl(image.key)}
								alt={image.name}
							/>
							<p>Description: {image.description || "none"}</p>
							<Button onClick={() => addDescription(index)}>
								Update Description
							</Button>
						</div>
						<MdDelete
							onClick={() => deleteImage(image.key)}
							className="delete-img"
						/>
					</StyledImageRow>
				))}
			</StyledImageGallery>
		</Modal>
	);
};

export default PropertyOverviewImages;
