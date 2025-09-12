const parentDiv = React.createElement("div", { id: "parent" }, [
        React.createElement("div", { id: "child" }, [
          React.createElement("h1", {}, "Hello Nested World"),
          React.createElement("h2", {}, "Hello Nested World"),
        ]),
        React.createElement("div", { id: "child" }, [
          React.createElement("h1", {}, "Hello Nested World"),
          React.createElement("h2", {}, "Hello Nested World"),
        ]),
      ]);
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parentDiv);

      // const heading = React.createElement("h1", {}, "Hello World React");

      // const heading = document.createElement("h1");
      // heading.innerHTML = "Hello World JS";
      // const root = document.getElementById("root");
      // root.appendChild(heading);