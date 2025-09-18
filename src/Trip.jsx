function Trip(){

    return (
        <form  className="form" method="POST">
            <div  className="form-group">
                <label htmlFor="Customername">Passenger Name: </label>
                <input type="text" name="Customername" id="Customername" placeholder="Enter Name*"/>
            </div>
            <div className="form-group">
                <label htmlFor="fromplace">From: </label>
                <input type="text" name="fromplace" id="fromplace" placeholder="Pickup Address  "/>
            </div>
            <div className="form-group">
                <label htmlFor="toplace">To: </label>
                <input type="text" name="toplace" id="toplace" placeholder="Destination Address"/>
            </div>
            <div className="form-group">
                
                <label htmlFor="date-time">PickUp Date & Time: </label>
                <input type="datetime-local" name="date-time" id="date-time" />
            </div>
            <div className="form-group">
                <label htmlFor="Member-count">Passenger count: </label>
                <input type="number" maxrange="7" name="Member-count" id="Member-count" /><br />
            </div>
            <div className="form-group">
                <button type="submit" onClick={SubmitEvent}>Submit</button>
            </div>
        </form>
       
    );

}

export default Trip;