import React from "react";

export default function Modal(props) {
  const { showModal, setShowModal } = props;

  return (
    <React.Fragment>
      {showModal && (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div
              id="modal-container"
              className="bg-gray-300 rounded-md md:w-1/3"
            >
              <div
                id="modal-header"
                className="px-6 py-6 border-gray-500 border-b flex  justify-between items-start relative"
              >
                <h3 className="text-3xl font-semibold">{props.modalHeading}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-0 right-0 h-8 w-10 m-2 outline-none focus:outline-none"
                >
                  <span className="font-semibold text-3xl ">×</span>
                </button>
              </div>
              <div id="modal-content" className="p-6 relative leading-relaxed">
                {props.children}
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
