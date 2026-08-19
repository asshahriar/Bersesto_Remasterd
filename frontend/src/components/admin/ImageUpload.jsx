"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function ImageUpload({ onUpload }) {
	return (
		<CldUploadWidget
			signatureEndpoint="/api/sign-cloudinary"
			uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
			options={{
				sources: ["local"],
				multiple: false,
				maxFileSize: 5_000_000,
				clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
				folder: "restaurant/menu",
			}}
			onSuccess={(result) => {
				const info = result.info;

				onUpload({
					url: info.secure_url,
					publicId: info.public_id,
				});
			}}
		>
			{({ open }) => (
				<button
					type="button"
					onClick={() => open()}
					className="rounded-md bg-dark px-5 py-3 text-light"
				>
					Upload Image
				</button>
			)}
		</CldUploadWidget>
	);
}
