import weight from '../data/weight.json'

export default function type_check(results) {
  let score = [0.0, 0.0, 0.0, 0.0]
  
  // weight 연산
  for (let score_index = 0; score_index < 4; score_index++) {
    for (let index = 0; index < 20; index++) {
      score[score_index] += weight.weight[score_index][index] * (results[index] - 3) / 2
    }
    score[score_index] += weight.bias[score_index]
  }

  let softmax_score = []
  let softmax_sum = 0.0
  for (let index = 0; index < 4; index++) {
    softmax_score.push(Math.exp(score[index]))
    softmax_sum += Math.exp(score[index])
  }

  for (let index = 0; index < 4; index++) {
    softmax_score[index] /= softmax_sum
  }
  
  let result = [[softmax_score[0], "공생"], [softmax_score[1], "쾌락"], [softmax_score[2], "생산"], [softmax_score[3], "소유"]]

  result.sort(function(left, right) {
    return left[0] > right[0] ? -1 : 1;
  })

  return result
}