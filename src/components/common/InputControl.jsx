const InputControl = (props) => {
  return (
    <div className="w-full sm:w-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <input
        {...props}
        className="font-[600] placeholder:font-[400] h-[40px]  outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-[5px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default InputControl;
