import { FC, useState, useRef, useEffect } from 'react';
import Styled from './styled';
import { AddClientModalProps } from './types';
import { Button } from '~/presentation/components/Button';

export const AddClientModal: FC<AddClientModalProps> = ({
  onCreate,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coordinate_x: 0,
    coordinate_y: 0,
  });

  const [lastPoint, setLastPoint] = useState<{ x: number; y: number } | null>(
    null,
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawMap = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height); // Clear canvas

      // Draw grid lines
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 1;
      for (let i = 0; i <= width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 0; j <= height; j += 20) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      // Draw last point
      if (lastPoint) {
        ctx.fillStyle = 'rgba(75, 192, 192, 0.6)';
        ctx.beginPath();
        ctx.arc(
          lastPoint.x + width / 2,
          height / 2 - lastPoint.y,
          5,
          0,
          2 * Math.PI,
        );
        ctx.fill();
      }
    };

    drawMap(); // Draw the map when the component mounts or updates
  }, [lastPoint]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Adjust coordinates to match the center of the canvas being (0,0)
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const adjustedX = x - canvasWidth / 2;
    const adjustedY = canvasHeight / 2 - y;

    setFormData((prev) => ({
      ...prev,
      coordinate_x: parseFloat(adjustedX.toFixed(2)),
      coordinate_y: parseFloat(adjustedY.toFixed(2)),
    }));

    setLastPoint({ x: adjustedX, y: adjustedY });
  };

  return (
    <Styled.ModalOverlay>
      <Styled.Modal>
        <Styled.Title>Adicionar cliente</Styled.Title>
        <Styled.Input
          name='name'
          value={formData.name}
          placeholder='Nome'
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Styled.Input
          name='email'
          value={formData.email}
          placeholder='Email'
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Styled.Input
          name='phone'
          value={formData.phone}
          placeholder='Telefone'
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Styled.Input
          name='coordinate_x'
          value={formData.coordinate_x}
          placeholder='Coordenada X'
          onChange={(e) =>
            setFormData({
              ...formData,
              coordinate_x: parseFloat(e.target.value),
            })
          }
        />
        <Styled.Input
          name='coordinate_y'
          value={formData.coordinate_y}
          placeholder='Coordenada Y'
          onChange={(e) =>
            setFormData({
              ...formData,
              coordinate_y: parseFloat(e.target.value),
            })
          }
        />
        <Styled.ButtonContainer>
          <Button onClick={() => onCreate(formData)}>Criar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </Styled.ButtonContainer>
        <Styled.MapContainer>
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            onClick={handleClick}
            style={{ border: '1px solid black' }}
          />
        </Styled.MapContainer>
      </Styled.Modal>
    </Styled.ModalOverlay>
  );
};
