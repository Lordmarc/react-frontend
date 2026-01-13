import { useState } from "react";

export default function AddProduct()
{

  const [form, setForm] = useState({
    category_id: "",
    name: "",
    price: "",
    stock: "",
});

const handleChange = (e) => {
  const {name, value} = e.target;

  setForm(prev => ({
    ...prev, [name]: value,
  }));
};

const handleSubmit = async (e) =>
{
  e.preventDefault();

  const payload = {
    ...form,
    price: Number(form.price),
    stock: Number(form.stock),
  };
}
}