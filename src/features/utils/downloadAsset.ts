import getAsset from "../api/assets/getAsset";

export const downloadAsset = async (key: string) => {
	try {
		const { data: presignedUrl } = await getAsset(key);
		window.open(presignedUrl, "_blank");
	} catch (err) {
		alert("Unable to download asset.");
		console.log(err.message);
	}
};
