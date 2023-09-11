interface Props {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-0 right-0 bg-red-600 text-white p-4 rounded-lg m-4 bg-red">
      <p>{message}</p>
    </div>
  );
};

export default Toast;
