import { useCallback } from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";


const ImageUploadForm = ({acceptedFiles, setAcceptedFiles}) => {

    const onDrop = useCallback(files => {
        const newFiles = [...acceptedFiles, ...files];
        const uniqueFiles = newFiles.reduce((unique, file) => {
            const isDuplicate = unique.some(existingFile =>
                existingFile.name === file.name && existingFile.lastModified === file.lastModified
            );
            if (!isDuplicate) {
                unique.push(file);
            }
            return unique;
        }, []);
        setAcceptedFiles(uniqueFiles);
    }, [acceptedFiles]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
    });

    return(
        <>
            <Form.Group {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                <Form.Label className="text-center w-100">
                    {isDragActive ? (
                        <p>Bilder hierhin ziehen ...</p>
                    ) : (
                        <p>Bilder mit drag'n drop hierhin oder anklicken um auszuwählen.</p>
                    )}
                </Form.Label>
                <Form.Control {...getInputProps()} type="file" className="d-none" />
            </Form.Group>
        </>
    )
}

export default ImageUploadForm;