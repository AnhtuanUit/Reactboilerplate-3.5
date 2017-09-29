import styled from 'styled-components';

export default styled.div`
  font-family: Avenir Next;

  .modal-dialog {
    width: 786px;
    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
      min-height: 100%;
    }
  }
  .modal-header {
    border-bottom: none;
    padding: 0;
    background-color: #f7f6f7;
  }
  .modal-body {
    padding: 0;
  }

  form {
    background-color: #f7f6f7;
    .error-message {
      border-right: none;
      border-left: none;
      margin-bottom: 0px;
      margin-top: -1;
      border-radius: 0;
    }
  }

`;
