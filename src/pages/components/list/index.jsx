import React, { Component, createRef } from "react";
import { View } from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}

const Row = React.memo(({ id, index, data }) => {
  return (
    <View id={id} style={{ border: "1px solid black", padding: 10 }}>
      Row {index} : {data[index]}
    </View>
  );
});

export default class List extends Component {
  state = {
    data: buildData(0),
  };

  list = createRef();

  render() {
    const { data } = this.state;
    const dataLen = data.length;
    return (
      <View style={{ width: "100vw", height: "100vh" }}>
        <View
          style={{
            position: "fixed",
            zIndex: 999,
            borderRadius: "50%",
            width: 30,
            height: 30,
            right: 20,
            bottom: 20,
            padding: 14,
            borderWidth: 2,
            borderColor: "black",
            borderStyle: "dashed",
          }}
          onClick={() => {
            this.list.current?.scrollToItem(50, "start");
          }}
        >
          Click
        </View>
        <VirtualList
          ref={this.list}
          height={800} /* 列表的高度 */
          width="100vw" /* 列表的宽度 */
          item={Row} /* 列表单项组件，这里只能传入一个组件 */
          itemData={data} /* 渲染列表的数据 */
          itemCount={dataLen} /* 渲染列表的长度 */
          itemSize={50} /* 列表单项的高度  */
        />
      </View>
    );
  }
}
