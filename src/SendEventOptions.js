import ReceiverGroup from './ReceiverGroup';

/**
 * 发送事件选项类
 */
export default class SendEventOptions {
  constructor() {
    /**
     * 缓存参数
     * @type {number}
     */
    this.cachingOption = 0;
    /**
     * 接收组
     * @type {ReceiverGroup}
     */
    this.receiverGroup = ReceiverGroup.All;
    /**
     * 接收者 ID 数组。如果设置，将会覆盖 receiverGroup
     * @type {Array.<string>}
     */
    this.targetActorIds = null;
  }
}
