import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Calendar, 
  MapPin, 
  AlertTriangle,
  Send 
} from 'lucide-react';

export default function RequestFood() {
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    dateNeeded: '',
    location: '',
    specialInstructions: '',
    priority: 'Medium'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Request Food</h1>
        <p className="text-gray-600">Fill out the form below to submit a new food request</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <label className="label" htmlFor="foodType">Food Type</label>
            <select
              id="foodType"
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Select food type</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Snacks">Snacks</option>
            </select>
          </div>

          <div className="card p-6">
            <label className="label" htmlFor="quantity">Quantity (meals)</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="input"
              min="1"
              required
            />
          </div>

          <div className="card p-6">
            <label className="label" htmlFor="dateNeeded">Date Needed</label>
            <div className="relative">
              <input
                type="datetime-local"
                id="dateNeeded"
                name="dateNeeded"
                value={formData.dateNeeded}
                onChange={handleChange}
                className="input pl-10"
                required
              />
              <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="card p-6">
            <label className="label" htmlFor="location">Location</label>
            <div className="relative">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input pl-10"
                placeholder="Enter delivery address"
                required
              />
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <label className="label" htmlFor="specialInstructions">Special Instructions</label>
          <textarea
            id="specialInstructions"
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            className="input min-h-[100px]"
            placeholder="Any dietary restrictions or special requirements?"
          />
        </div>

        <div className="card p-6">
          <label className="label">Priority Level</label>
          <div className="flex space-x-4">
            {['Low', 'Medium', 'High'].map((priority) => (
              <label
                key={priority}
                className={`flex-1 flex items-center justify-center p-4 rounded-xl cursor-pointer border-2 transition-all duration-200 ${
                  formData.priority === priority
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
              >
                <input
                  type="radio"
                  name="priority"
                  value={priority}
                  checked={formData.priority === priority}
                  onChange={handleChange}
                  className="sr-only"
                />
                <AlertTriangle className={`w-5 h-5 mr-2 ${
                  formData.priority === priority ? 'text-indigo-500' : 'text-gray-400'
                }`} />
                {priority}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary flex items-center">
            <Send className="w-5 h-5 mr-2" />
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}