// При нажатии на кнопку Load more должна догружаться следующая
// порция изображений и рендериться вместе с предыдущими.Кнопка
// должна рендерится только тогда, когда есть какие - то загруженные
// изобаржения.Если массив изображений пуст, кнопка не рендерится.
export const Button = ({ current, total, onChange }) => {
  return (
    <section>
      <button
        type="button"
        disabled={current === 1}
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={current === total}
        onClick={() => onChange(1)}
      >
        Вперед
      </button>
    </section>
  );
};

export const Progress = ({ current, total }) => {
  return (
    <p>
      {current}/{total}
    </p>
  );
};
