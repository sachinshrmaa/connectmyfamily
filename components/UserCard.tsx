import Image from "next/image";

const UserCard = ({ name, phone, description, address, image, status }) => {
  return (
    <div className="border rounded-md relative">
      <small
        className={`px-2 py-1 rounded-lg absolute top-2 right-2 text-white ${
          status === "missing"
            ? "bg-yellow-500"
            : status === "found"
            ? "bg-green-500"
            : status === "deceased"
            ? "bg-red-500"
            : "bg-blue-500" // Default class if status doesn't match any case
        }`}
      >
        {status}
      </small>
      <Image
        src={image}
        className="w-full rounded-t-md"
        alt={name}
        height={450}
        width={300}
      />
      <div className="p-2 ">
        <h2 className="text-1xl font-normal mt-2 capitalize">{name}</h2>
        <div className="flex gap-2 my-1">
          <i className="bi bi-telephone"></i>
          <a href={`tel:${phone}`} className="text-blue-400">
            {phone}
          </a>
        </div>
        <div className="flex gap-2 mb-1">
          <i className="bi bi-geo-alt"></i>
          <p className="text-sm capitalize">{address}</p>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default UserCard;
