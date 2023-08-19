import idFront from "../src/assets/ID-Front.png";
import idBack from "../src/assets/ID-BACK.png";
import TaxDocFront from "../src/assets/TAX-Doc-Front.png";
import TaxDocBack from "../src/assets/TAX Doc. Back.png";
import AddressProof from "../src/assets/Address-Proof.png";
import { useState } from "react";
import RejectModal from "./RejectModal";
function App() {
  const [open, setOpen] = useState("");
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-8 pt-3 uppercase">KYC verification</h1>

      <div className="">
        From Date: <input type="date" className="border mr-3" />
        To Date : <input type="date" className="border" />
        <button className="px-10 ml-8 py-1 rounded-lg text-white bg-[#3D9E64]">
          Apply
        </button>
      </div>

      <div className="mt-16 ">
        <div className="flex border py-1 items-center mb-3 rounded px-[5px] justify-between w-[300px]">
          <span>Search</span>
          <input className="py-1" type="text" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="bg-[#007BFF] text-white ">
                <th className="border-r text-[14px] py-[10px]">SL NO:</th>
                <th className="border-r text-[14px] py-[10px]">Number ID</th>
                <th className="border-r text-[14px] py-[10px]">country</th>
                <th className="border-r text-[14px] py-[10px]">ID Title</th>
                <th className="border-r text-[14px] py-[10px]">ID Number</th>
                <th className="border-r text-[14px] py-[10px]">Id Front</th>
                <th className="border-r text-[14px] py-[10px]">ID Back</th>
                <th className="border-r text-[14px] py-[10px]">
                  Tax Doc .Title
                </th>
                <th className="border-r text-[14px] py-[10px]">
                  Tax Doc . Number
                </th>
                <th className="border-r text-[14px] py-[10px]">
                  Tax Doc . Front
                </th>
                <th className="border-r text-[14px] py-[10px]">
                  Tax Doc . Back
                </th>
                <th className="border-r text-[14px] py-[10px]">
                  Address Proof
                </th>
                <th className="text-center text-[14px] py-[10px]">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-[14px] py-[6px]">1</th>
                <td className="text-[14px] py-[6px]">VT-123456</td>
                <td className="text-[14px] py-[6px]">India</td>
                <td className="text-[14px] py-[6px] ">AadhaarCard</td>
                <td className="text-[14px] py-[6px]">123456789012</td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_3.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_3" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          ID FRONT
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={idFront}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_4.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_4" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          ID BACK
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={idBack}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">PAN CARD</td>
                <td className="text-[14px] py-[6px]">ABCTY1234D</td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_5.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_5" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          Tax Doc. Front
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={TaxDocFront}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_6.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_6" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          Tax Doc. Back
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={TaxDocBack}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_7.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_7" className="modal  ">
                    <form
                      method="dialog"
                      className="modal-box h-[110vh] p-0 text-white"
                    >
                      <div className="bg-[#0388D4] w-full  py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          Tax Doc. Back
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%]  mx-auto my-12"
                        src={AddressProof}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="flex">
                  <label
                    htmlFor="my_modal_8"
                    className="px-7 py-[7px] text-white bg-[#02B449] rounded-2xl mr-2"
                  >
                    Verify
                  </label>

                  <input
                    type="checkbox"
                    id="my_modal_8"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Are you sure you want to{" "}
                        <span className="text-[#029A36] font-semibold">
                          Verify
                        </span>{" "}
                        this KYC ?
                      </h3>

                      <div className="flex mt-12  justify-center items-center">
                        <div className="">
                          <label
                            htmlFor="my_modal_8"
                            className=" border border-[#0019FF] text-[#0019FF] px-8 py-2 text-lg rounded-xl  mr-8"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="">
                          <label
                            htmlFor="my_modal_8"
                            className=" border-[#FF0000] text-[#FF0000] border px-8 py-2 text-lg rounded-xl "
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label
                    htmlFor="my_modal_10"
                    className="px-7 py-[7px] text-white bg-[#FF0000] rounded-2xl mr-2"
                  >
                    Reject
                  </label>

                  <input
                    type="checkbox"
                    id="my_modal_10"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      {open === true ? (
                        <>
                          <h3 className="font-bold text-lg text-[#FF0000]">
                            Reason For Rejection !
                          </h3>
                        </>
                      ) : (
                        <>
                          <h3 className="font-bold text-lg">
                            Are you sure you want to{" "}
                            <span className="text-[#FF0000] font-semibold">
                              Reject
                            </span>{" "}
                            this KYC ?
                          </h3>
                        </>
                      )}

                      {open === true && (
                        <>
                          <RejectModal></RejectModal>
                        </>
                      )}
                      <div className="flex mt-12  justify-center items-center">
                        <div className="">
                          {open === true ? (
                            <>
                              <label
                                htmlFor="my_modal_10"
                                className=" border border-[#0019FF] text-[#0019FF] px-8 py-2 text-lg rounded-xl  mr-8"
                              >
                                Submit
                              </label>
                            </>
                          ) : (
                            <>
                              <label
                                htmlFor=""
                                className=" border border-[#0019FF] text-[#0019FF] px-8 py-2 text-lg rounded-xl  mr-8"
                                onClick={() => {
                                  setOpen(true);
                                }}
                              >
                                Yes
                              </label>
                            </>
                          )}
                          {open === true ? (
                            <>
                              <label
                                htmlFor="my_modal_10"
                                className=" border-[#FF0000] text-[#FF0000] border px-8 py-2 text-lg rounded-xl "
                              >
                                Cancel
                              </label>
                            </>
                          ) : (
                            <>
                              <label
                                htmlFor=""
                                className=" border border-[#0019FF] text-[#FF0000] px-8 py-2 text-lg rounded-xl  mr-8"
                                onClick={() => {
                                  setOpen(true);
                                }}
                              >
                                NO
                              </label>
                            </>
                          )}
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              {/*  */}

              <tr>
                <th className="text-[14px] py-[6px]">2</th>
                <td className="text-[14px] py-[6px]">VT-123456</td>
                <td className="text-[14px] py-[6px]">India</td>
                <td className="text-[14px] py-[6px] ">AadhaarCard</td>
                <td className="text-[14px] py-[6px]">123456789012</td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_15.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_15" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          ID FRONT
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={idFront}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_16.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_16" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          ID BACK
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={idBack}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">PAN CARD</td>
                <td className="text-[14px] py-[6px]">ABCTY1234D</td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_17.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_17" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          Tax Doc. Front
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={TaxDocFront}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_18.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_18" className="modal ">
                    <form method="dialog" className="modal-box p-0 text-white">
                      <div className="bg-[#0388D4] w-full py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          Tax Doc. Back
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%] mx-auto my-12"
                        src={TaxDocBack}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="text-[14px] py-[6px]">
                  <button
                    className="btn"
                    onClick={() => window.my_modal_19.showModal()}
                  >
                    <span className="underline text-[#0388D4]">View</span>
                  </button>
                  <dialog id="my_modal_19" className="modal  ">
                    <form
                      method="dialog"
                      className="modal-box h-[110vh] p-0 text-white"
                    >
                      <div className="bg-[#0388D4] w-full  py-3 items-center">
                        <h3 className="font-bold text-lg text-center">
                          Tax Doc. Back
                        </h3>
                        <div className="flex justify-end -mt-[16px] px-2">
                          <button className="text-end">
                            <i className="fa-solid  -mt-[16px] px-2 fa-xmark text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <img
                        className="w-[78%]  mx-auto my-12"
                        src={AddressProof}
                        alt=""
                      />
                    </form>
                  </dialog>
                </td>
                <td className="flex">
                  <label
                    htmlFor="my_modal_8"
                    className="px-7 py-[7px] text-white bg-[#02B449] rounded-2xl mr-2"
                  >
                    Verify
                  </label>

                  <input
                    type="checkbox"
                    id="my_modal_8"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Are you sure you want to{" "}
                        <span className="text-[#029A36] font-semibold">
                          Verify
                        </span>{" "}
                        this KYC ?
                      </h3>

                      <div className="flex mt-12  justify-center items-center">
                        <div className="">
                          <label
                            htmlFor="my_modal_8"
                            className=" border border-[#0019FF] text-[#0019FF] px-8 py-2 text-lg rounded-xl  mr-8"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="">
                          <label
                            htmlFor="my_modal_8"
                            className=" border-[#FF0000] text-[#FF0000] border px-8 py-2 text-lg rounded-xl "
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label
                    htmlFor="my_modal_10"
                    className="px-7 py-[7px] text-white bg-[#FF0000] rounded-2xl mr-2"
                  >
                    Reject
                  </label>

                  <input
                    type="checkbox"
                    id="my_modal_10"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      {open === true ? (
                        <>
                          <h3 className="font-bold text-lg text-[#FF0000]">
                            Reason For Rejection !
                          </h3>
                        </>
                      ) : (
                        <>
                          <h3 className="font-bold text-lg">
                            Are you sure you want to{" "}
                            <span className="text-[#FF0000] font-semibold">
                              Reject
                            </span>{" "}
                            this KYC ?
                          </h3>
                        </>
                      )}

                      {open === true && (
                        <>
                          <RejectModal></RejectModal>
                        </>
                      )}
                      <div className="flex mt-12  justify-center items-center">
                        <div className="">
                          {open === true ? (
                            <>
                              <label
                                htmlFor="my_modal_10"
                                className=" border border-[#0019FF] text-[#0019FF] px-8 py-2 text-lg rounded-xl  mr-8"
                              >
                                Submit
                              </label>
                            </>
                          ) : (
                            <>
                              <label
                                htmlFor=""
                                className=" border border-[#0019FF] text-[#0019FF] px-8 py-2 text-lg rounded-xl  mr-8"
                                onClick={() => {
                                  setOpen(true);
                                }}
                              >
                                Yes
                              </label>
                            </>
                          )}
                          {open === true ? (
                            <>
                              <label
                                htmlFor="my_modal_10"
                                className=" border-[#FF0000] text-[#FF0000] border px-8 py-2 text-lg rounded-xl "
                              >
                                Cancel
                              </label>
                            </>
                          ) : (
                            <>
                              <label
                                htmlFor=""
                                className=" border border-[#0019FF] text-[#FF0000] px-8 py-2 text-lg rounded-xl  mr-8"
                                onClick={() => {
                                  setOpen(true);
                                }}
                              >
                                NO
                              </label>
                            </>
                          )}
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              {/*  */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex mt-44 items-center">
        <span className="mr-4">
          Showing <strong className="text-[#007BFF]">1</strong> of 46
        </span>
        <div className="">
          <i className="fa-solid fa-angles-left border py-4 px-3  text-[#0388D4]"></i>
          <span className="border p-3 bg-[#007BFF] text-white">1</span>
          <span className="border p-3">2</span>
          <span className="border p-3">3</span>
          <span className="border p-3">4</span>
          <span className="border p-3">5</span>
          <i className="fa-solid border py-4 px-3 fa-angles-right  text-[#0388D4]"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
