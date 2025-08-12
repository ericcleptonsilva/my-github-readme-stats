const renderWakatimeCard = require("../src/cards/wakatime-card");

const { wakaTimeData } = require("./fetchWakatime.test");

describe("Test Render Wakatime Card", () => {
  it("should render correctly", () => {
    const card = renderWakatimeCard(wakaTimeData.data, { locale: "en" });

    expect(card).toMatchSnapshot();
  });

  it("should render correctly with compact layout", () => {
    const card = renderWakatimeCard(wakaTimeData.data, {
      layout: "compact",
      locale: "en",
    });

    expect(card).toMatchSnapshot();
  });

  it("should render translations", () => {
    document.body.innerHTML = renderWakatimeCard({}, { locale: "cn" });
    expect(document.getElementsByClassName("header")[0].textContent).toBe(
      "Wakatime 周统计",
    );
    expect(
      document.querySelector('g[transform="translate(0, 0)"]>text.stat.bold')
        .textContent,
    ).toBe("本周没有编程活动");
  });

  it("should render without rounding", () => {
    document.body.innerHTML = renderWakatimeCard(wakaTimeData.data, {
      border_radius: "0",
      locale: "en",
    });
    expect(document.querySelector("rect")).toHaveAttribute("rx", "0");
    document.body.innerHTML = renderWakatimeCard(wakaTimeData.data, {
      locale: "en",
    });
    expect(document.querySelector("rect")).toHaveAttribute("rx", "4.5");
  });
});
