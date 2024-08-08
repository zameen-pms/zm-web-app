import { useEffect, useState } from "react";
import FileUpload from "../fileUpload/FileUpload";
import { StyledFileUploadModal } from "./FileUploadModal.styled";
import uploadAsset from "../../api/assets/uploadAsset";
import { getImageUrl } from "../../utils/getImageUrl";
import { MdDelete } from "react-icons/md";
import removeAssetByKey from "../../api/assets/removeAssetByKey";

const FileUploadModal = ({
	value,
	onChange,
	multiple = false,
	allowedFileTypes = [],
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const text = multiple ? "Upload File(s)" : "Upload File";
	const [selectedFiles, setSelectedFiles] = useState(value || []);

	const handleChange = async (files) => {
		if (files.length === 0) return;
		try {
			setIsLoading(true);
			const tempFiles = [];
			for (const file of files) {
				const { data: key } = await uploadAsset(file);
				tempFiles.push(key);
			}
			setSelectedFiles(tempFiles);
		} catch (err) {
			alert(`Unable to upload assets: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async (key) => {
		try {
			setIsLoading(true);
			await removeAssetByKey(key);
			setSelectedFiles((prev) => prev.filter((file) => file !== key));
		} catch (err) {
			alert(`Unable to delete asset: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		onChange(selectedFiles);
	}, [selectedFiles]);

	return (
		<StyledFileUploadModal>
			<FileUpload
				multiple={multiple}
				allowedFileTypes={allowedFileTypes}
				onChange={handleChange}
				text={text}
				isLoading={isLoading}
			/>
			{selectedFiles.length > 0 && (
				<div className="upload-modal">
					{selectedFiles.map((file, index) => {
						if (!file) return;
						return (
							<div key={index} className="modal-img">
								<img src={getImageUrl(file)} alt="File" />
								<MdDelete onClick={() => handleDelete(file)} />
							</div>
						);
					})}
				</div>
			)}
		</StyledFileUploadModal>
	);
};

export default FileUploadModal;
