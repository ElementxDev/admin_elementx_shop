import React, { useEffect, useState } from 'react';
import styles from './CreateProduct.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import getCategories from '../../services/getCategories';
import { saveProduct } from '../../api/productsApi';

function CreateProduct() {
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    rating: 0,
    description: '',
    stock: 0,
    category: '62cbb111b37955bd088c8b2a',
    brand: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const res = await getCategories();
      console.log(res);
      setCategories(res);
    }
    loadCategories();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('rating', product.rating);
    formData.append('description', product.description);
    formData.append('stock', product.stock);
    formData.append('category', product.category);
    formData.append('brand', product.brand);
    formData.append('image', selectedImage);
    await saveProduct(formData);
    toast.success('Producto guardado con éxito');
    navigate('/home');
  }

  return (
    <div className={styles.container}>
      <div className={styles.form__head}>
        <Link to="/home">
          <img
            src="assets/ElementxOnlineBack.svg"
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <h1 className={styles.title}>Create Product</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__content}>
          <div className={styles.form__content__item}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
          </div>
          <div className={styles.form__content__item}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__content__item}>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={product.rating}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__content__item}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__content__item}>
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form__content__item}>
            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={handleChange}>
              {categories?.map((category, index) => {
                return (
                  <option key={index} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.form__content__item}>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__content__item}>
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="">
          <img
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : '/assets/noimage.png'
            }
            type="file"
            className={styles.img__thumbnail}
            alt={product.name}
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CreateProduct;
