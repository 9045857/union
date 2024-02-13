// import React, { useState } from 'react';

// const ImageUploader = ({ onImageSelect }) => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleImageSelect = (e) => {
//         const file = e.target.files[0]; // Получаем выбранный файл

//         if (file) {
//             setSelectedImage(URL.createObjectURL(file)); // Отображаем выбранное изображение
//             onImageSelect(file); // Вызываем колбэк и передаем файл
//         }
//     };

//     return (
//         <div>
//             {selectedImage && (
//                 <img
//                     src={selectedImage}
//                     alt='Selected'
//                 />
//             )}
//             <input
//                 type='file'
//                 accept='image/*'
//                 onChange={handleImageSelect}
//             />
//         </div>
//     );
// };

// export default ImageUploader;
