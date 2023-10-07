import Image from "next/image";

const UserCard = ({ name, phone, description, address, image }) => {
  return (
    <div className="border rounded hover:bg-gray-50">
      <Image
        src={image}
        className="w-full"
        alt={name}
        height={450}
        width={300}
      />
      <div className="p-2 ">
        <h2 className="text-1xl font-semibold">{name}</h2>
        <div className="flex gap-2 my-1">
          <i className="bi bi-telephone"></i>
          <a href={`tel:${phone}`} className="text-blue-400">
            {phone}
          </a>
        </div>
        <div className="flex gap-2 mb-1">
          <i className="bi bi-geo-alt"></i>
          <p className="text-sm">{address}</p>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default UserCard;
