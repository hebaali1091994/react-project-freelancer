import "./BidProject.css"

const BidProject = () => {
    return (
        <div className="BidProject bg-white">
            <div className="container">
                <nav class="navbar navbar-white ">
                    <h4 className="px-4 mt-3"> Place a Bid on this Project</h4>
                </nav>
                <hr />
                <div className="DeatilsProject ">
                    <p>You will be able to edit your bid until the project is awarded to someone.
                    </p>

                </div>
                <form>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip01 ">Bid Amount
                            </label>
                            <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" required />
                            <div class="valid-tooltip">
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip02">Last name</label>
                            <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" required />
                            <div class="valid-tooltip">
                                Looks good!
                            </div>
                        </div>

                    </div>
                    <p>Paid to you: ₹12,501.00 - ₹1,250.10 fee = ₹11,250.90
                    </p>
                    <div class="col-md-4 mb-3">
                        <label for="validationTooltip01 ">Describe your proposal</label>
                        <textarea
                            className="  justify-content-center"
                            id="w3review"
                            rows="10"
                            cols="95"
                            style={{
                                marginTop: "0px",
                                marginLeft: "17px",
                            }}
                        ></textarea>
                        <div class="valid-tooltip">
                        </div>
                        <h6>Suggest a milestone payment</h6>
                        <p>Define the tasks that you will complete for this</p>
                        <div className="row">
                            <div className="col-7">
                                <div className="border d-flex flex-row">
                                    <input
                                        type="text"
                                        placeholder="Project milestone"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border d-flex flex-row">
                                    <p id="symbol2" className="m-auto">
                                        <b>$</b>
                                    </p>
                                    <input
                                        type="number"
                                        value="2800"
                                        style={{
                                            width: "80%",
                                            height: "5vh",
                                            border: "0",
                                        }}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn"
                        style={{ background: "#999", marginTop: "10px" }}
                    >
                        Add another milestone payment
                    </button>
                    <hr></hr>
                </form>
            </div>
        </div>
    )
}

export default BidProject
