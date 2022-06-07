import React, {useState} from "react";
import PropTypes from "prop-types";

function ImageWithFallback({ src, ...props }) {
	const [imgSrc, setImgSrc] = useState(src);
	const handleError = () => setImgSrc(require("../../assets/images/noImage.webp"));
	
	return <img src={imgSrc} onError={handleError} {...props} />;
}
ImageWithFallback.propTypes = {
	src: PropTypes.string
};

export default ImageWithFallback;