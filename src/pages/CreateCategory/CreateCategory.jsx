import React, { useState } from 'react';
import styles from './CreateCategory.module.css';
import { Link } from 'react-router-dom';
import addCategory from '../../services/addCategory';

function CreateCategory() {
  const [category, setCategory] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    await addCategory(category);
  }
  return (
    <div className={styles.container}>
      <div>
        <Link to="/home">
          <img
            src="assets/ElementxOnlineBack.svg"
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <h1 className={styles.title}>Create Category</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="name">Nombre de Categoria</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={category.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
}

export default CreateCategory;
