import Image from "next/image";

const UserCard = ({name, phone, description}) => {
  return (
    <div className="border rounded hover:bg-gray-50">
      <Image src="/default-img.jpg" className="w-full" alt={name} height={450} width={300} />
      <div className="p-2 ">
        <h2 className="text-1xl font-semibold">{name}</h2>
        <a href={`tel:${phone}`} className="text-blue-400">
          {phone}
        </a>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default UserCard;
