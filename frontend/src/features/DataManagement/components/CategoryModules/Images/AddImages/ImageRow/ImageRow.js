import "./ImageRow.css";

const ImageRow = ({file, onClick}) => {
    return(
        <div className="image-row" onClick={() => onClick(file)}>
            <img src={URL.createObjectURL(file)} alt={file.name} />
            {file.name}
        </div>
    )
}

export default ImageRow;
