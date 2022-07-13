
const ConfirmModal = ({onButton1Select, onButton2Select, prompt, children, button1Option, button2Option}) => {

    <Modal>
        {children}
        <h2>{prompt}</h2>
        {button1Option && <button onClick={onButton1Select}>{button1Option}</button>}
        {button2Option && <button onClick={onButton2Select}>{button2Option}</button>}
        <button>No</button>
    </Modal>


}

<ConfirmModal
    prompt="Are you sure you want to delete that?"
    onButton1Select={handleModalClose}
    button1Option="Close"
>
    <p>{selectedTask.title}</p>
    <p>{selectedTask.plant.plantNameOne}</p>
    <p>{selectedTask.description}</p>
    <p>{isEventCompleted(selectedTask.completed)}</p>
</ConfirmModal>