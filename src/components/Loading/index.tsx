import { useEffect, useState } from 'react';
import styles from './LoadingButton.module.scss';

type LoadingButtonProps = {
  onClick: () => void;
  loading: boolean;
  text: string;
};

const LoadingButton: React.FC<LoadingButtonProps> = ({ onClick, loading, text }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(loading);
  }, [loading]);

  const handleClick = () => {
    setIsDisabled(true);
    onClick();
  };

  return (
    <button
        className={styles.button}    
        onClick={handleClick}
        disabled={loading || isDisabled}
    >
      {loading ? 'Sending' : text}
    </button>
  );
};

export default LoadingButton;
