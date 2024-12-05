const genUUIDforModal = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    const random = Math.random() * 16 | 0; 
    const value = char === 'x' ? random : (random & 0x3 | 0x8); 
    return value.toString(16);
  });
}

const functionalModal = async (text, options) => {
  const modalId = genUUIDforModal();
  let btnOptions = '';
  options.forEach(opt => {
    btnOptions += `<div class="col-8 mx-auto mb-3"> <button type="button" class="btn btn-primary w-100" data-btn-index="${opt.id}" data-bs-dismiss="modal">${opt.text}</button> </div>`
    btnOptions += ' ';
  });

  const modalHTML = `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            ${text}
          </div>
          <div class="modal-footer">
            <div class="row"> 
              ${btnOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modalElement = document.getElementById(modalId);
  const bootstrapModal = new bootstrap.Modal(modalElement, {
    backdrop: 'static', // Prevent closing by clicking outside the modal
    keyboard: false     // Prevent closing with the Escape key
  });

  return new Promise((resolve) => {
    const buttons = modalElement.querySelectorAll('[data-btn-index]');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        resolve(e.target.getAttribute('data-btn-index'));
        bootstrapModal.hide();
        modalElement.addEventListener('hidden.bs.modal', () => {
          modalElement.remove();
        });
      });
    });

    bootstrapModal.show();
  });
}