const Input = function ({ placeholder, type, name, onChange, value, required = false }) {
    return (
        <input type={type} name={name} onChange={onChange} placeholder={placeholder} value={value} require={required} />
    )
}

export default Input;