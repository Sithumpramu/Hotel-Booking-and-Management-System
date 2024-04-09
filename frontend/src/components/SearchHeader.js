import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
    faHotel,
    faCopy
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { useNavigate } from "react-router-dom";
  
  const SearchHeader = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [capacity, setCapacity] = useState(1);
  
    const navigate = useNavigate();
  
    const handleSearch = () => {
      navigate("/halls", { state: { destination, date, capacity } });
    };
  
    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faHotel} />
              <span>Venues</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCalendarDays} /> 
              <span>Calender</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCopy} />
              <span>Reservations</span>
            </div>
            
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle serif">
              Looking to host an unforgettable event?🎉
              </h1>
              <p>
                Look no further! Our stunning halls are the perfect backdrop for your special day. With versatile spaces, 
                state-of-the-art amenities, and exceptional service,
                 we're here to turn your vision into reality.
                </p> <p>Book your event with us today and let's create memories that last a lifetime.
              </p>
  
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Type of event?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${date[0].startDate.toLocaleDateString()} to ${date[0].endDate.toLocaleDateString()}`}</span>
                  {openDate && (
                    <div className="dateDropdown">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                      />
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{` Capacity`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Capacity</span>
                        <div className="headerSearchItem">
                          <FontAwesomeIcon
                            icon={faPerson}
                            className="headerIcon"
                          />
                          <input
                            type="number"
                            value={capacity}
                            onChange={(e) =>
                              setCapacity(parseInt(e.target.value))
                            }
                            className="headerCapacityInput"
                            placeholder="Enter capacity"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default SearchHeader;
  