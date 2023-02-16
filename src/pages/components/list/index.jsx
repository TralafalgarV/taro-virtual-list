import React, { Component, createRef } from 'react'
import { View } from '@tarojs/components'
import VirtualList from '@tarojs/components/virtual-list'

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset)
}

const Row = React.memo(({ id, index, data }) => {
  return (
    <View id={id} style={{ borderColor: 'black', borderWidth: 1, borderStyle: 'solid' }}>
      <View>
        <View>
          <View>
            <View>
              <View>
                Row {index} : {data[index]}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
})

export default class List extends Component {
  state = {
    data: buildData(0),
  }

  list = createRef()

  render() {
    const { data } = this.state
    const dataLen = data.length
    return (
      <>
        <View onClick={() => {
          this.list.current?.scrollToItem(50, 'start')
        }}
        >111111111</View>
        <VirtualList
          ref={this.list}
          height={800} /* 列表的高度 */
          width='100%' /* 列表的宽度 */
          item={Row} /* 列表单项组件，这里只能传入一个组件 */
          itemData={data} /* 渲染列表的数据 */
          itemCount={dataLen} /* 渲染列表的长度 */
          itemSize={100} /* 列表单项的高度  */
        />
      </>
    )
  }
}