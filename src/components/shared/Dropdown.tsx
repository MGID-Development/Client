import useOpen from "@/hooks/useOpen";

type DropdownProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
};

const Dropdown = ({ children, trigger }: DropdownProps) => {
  const { isOpen, open, close, toggle } = useOpen();
  return (
    <div
      onMouseEnter={open}
      onMouseLeave={close}
      style={{ position: "relative" }}
    >
      <div onClick={toggle} style={{ cursor: "pointer" }}>
        {trigger}
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "max-content",
            zIndex: 1,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
