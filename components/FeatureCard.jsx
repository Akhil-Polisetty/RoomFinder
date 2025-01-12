const FeatureCard = ({ icon, title, description, buttonText, onClick }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      <div>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        {buttonText}
      </button>
    </div>
  );
export default FeatureCard;  