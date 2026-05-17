function CakeCard({ cake, handleDelete, handleEdit }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <img
        src={cake.image}
        alt={cake.name}
        className="h-48 w-full object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-2">{cake.name}</h2>

      <p>{cake.flavor}</p>

      <p className="text-[#d4af37] font-bold">
        KES {cake.price}
      </p>

      <button
        onClick={() => handleEdit(cake)}
        className="bg-[#0033a0] text-white px-3 py-1 rounded mr-2"
      >
        Edit
      </button>

      <button
        onClick={() => handleDelete(cake.id)}
        className="bg-black text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  )
}

export default CakeCard