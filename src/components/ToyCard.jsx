import React, { useState } from 'react';
import { useParams } from 'react-router';
import toys from '../data/toys.json';

const initialFormState = { name: '', email: '' };

const ToyDetails = () => {
    const { id } = useParams();
    const toy = toys.find(t => String(t.toyId) === id);
    const [form, setForm] = useState(initialFormState);

    if (!toy) return <div className="p-10">Toy not found</div>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        toast.success(`Try request submitted for ${form.name}!`);
        
        setForm(initialFormState);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                    src={toy.pictureURL} 
                    alt={toy.toyName} 
                    className="w-full h-80 object-contain md:h-full" 
                />
                
                <div>
                    <h1 className="text-3xl font-extrabold mb-2">{toy.toyName}</h1>
                    <p className="text-md text-gray-700 mb-4">{toy.description}</p>
                    
                    <div className="space-y-1 text-lg">
                        <div className="text-xl">Price: <strong className="text-green-600">${toy.price}</strong></div>
                        <div>Rating: <span className="text-yellow-500">★</span> {toy.rating}</div>
                        <div>Available Stock: <span className="font-medium">{toy.availableQuantity}</span></div>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 p-4 border rounded-lg shadow-md space-y-4">
                        <h2 className="text-xl font-semibold">Request a Trial</h2>
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input 
                                id="name" 
                                name="name" 
                                value={form.name} 
                                onChange={handleChange} 
                                required 
                                className="w-full border p-2 rounded-md focus:ring-green-500 focus:border-green-500" 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                id="email" 
                                name="email" 
                                value={form.email} 
                                onChange={handleChange} 
                                required 
                                type="email" 
                                className="w-full border p-2 rounded-md focus:ring-green-500 focus:border-green-500" 
                            />
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md transition duration-150"
                        >
                            Submit Try Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;