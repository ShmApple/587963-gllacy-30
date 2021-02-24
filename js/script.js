const resolveWidth = (field) => {
   const {length} = field.value.toString();
   field.style.width = `${length * 8}px`;
};

for (const field of document.querySelectorAll('.filter-form__input--price')) {
  resolveWidth(field);

  field.addEventListener('input', () => resolveWidth(field));
}
