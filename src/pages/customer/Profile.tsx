const CustomerProfile = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md"
              placeholder="+1 234 567 890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={3}
              placeholder="Enter your address"
            ></textarea>
          </div>
          <button className="w-full bg-customer-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;