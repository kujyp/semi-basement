import meta from "./meta/reducer"
import music from "./music/reducer"
import player from "./player/reducer"
import playList from "./playlist/reducer"
// 이는 바깥에서 combine 해준다.
export default {
  meta,
  music,
  player,
  playList
}
