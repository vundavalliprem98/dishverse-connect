const ChefProfile = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Chef Profile</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-20 w-20 bg-gray-200 rounded-full"></div>
            <button className="text-chef-primary hover:text-opacity-80">
              Change Photo
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Chef John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Italian Cuisine"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience (Years)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              placeholder="10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Tell us about yourself and your culinary journey..."
            ></textarea>
          </div>
          <button className="w-full bg-chef-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;