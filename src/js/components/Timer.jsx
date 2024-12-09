const Timer = ({ value = "00000" }) => {
  return (
    <div className="w-100 border border-solid border-2 border-primary-subtle rounded-2 px-3 py-2">
      <div className="row d-flex flex-row justify-space-between gap-2">
        <div className="col rounded bg-secondary-subtle text-center">
          <h1>
            <i className="fa-solid fa-dumpster-fire"></i>
          </h1>
        </div>
        <div className="col rounded bg-secondary-subtle text-center">
          <h1>{value[0]}</h1>
        </div>
        <div className="col rounded bg-secondary-subtle text-center">
          <h1>{value[1]}</h1>
        </div>
        <div className="col rounded bg-secondary-subtle text-center">
          <h1>{value[2]}</h1>
        </div>
        <div className="col rounded bg-secondary-subtle text-center">
          <h1>{value[3]}</h1>
        </div>
        <div className="col rounded bg-secondary-subtle text-center">
          <h1>{value[4]}</h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
