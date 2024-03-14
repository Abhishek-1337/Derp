const DeleteDataInModal = ({
  dispatchDeleteItem,
  handleModalOnCancel,
  itemToDeleteId,
}) => {
  return (
    <div className="flex flex-col w-full justify-between">
      <div className="mb-2 font-base">Are you sure?</div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            dispatchDeleteItem(itemToDeleteId);
          }}
          className="bg-red-700 text-white text-[12px] md:text-xs p-1 rounded-lg mr-2 hover:scale-110 transition-all"
        >
          Confirm
        </button>
        <button
          onClick={handleModalOnCancel}
          className="border-blue-700 border-[1px] text-blue-700 text-[12px] md:text-xs p-1 rounded-lg hover:scale-110 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteDataInModal;
