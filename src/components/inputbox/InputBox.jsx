
const InputBox=({ label, id, name, type = "text", placeholder = "", required = false,minLength, maxLength })=> {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium  text-gray-900"
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
           minLength={minLength}
          maxLength={maxLength}
          className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default InputBox;
