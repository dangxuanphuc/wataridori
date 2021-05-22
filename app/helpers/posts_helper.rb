require "json"

module PostsHelper
  def getKeyEmoji postContent
    regExp = /\(.*?\)/
    postContent.scan(regExp)
  end

  def replaceToEmoticon postContent
    emoticons = File.read("public/emoticons/emoticon.json")
    emojiArray = JSON.parse(emoticons)
    newContent = postContent
    keyArr = getKeyEmoji(postContent)
    arr = []

    emojiArray.each do |emoji|
      arr.push(emoji['key'])
    end

    keyNotOverlap = keyArr & arr

    srcArr = keyArr & arr

    emojiArray.each do |emoji|
      keyNotOverlap.each_with_index do |j, index|
        if j == emoji['key']
          srcArr[index] = emoji['src']
        end
      end
    end

    keyNotOverlap.each_with_index do |key, index|
      newContent = newContent.gsub(
        key,
        "<img src='" +
          srcArr[index] +
          "' title='" +
          key +
          "' alt='" +
          key +
          "' class='emoticon' />"
      )
    end

    newContent
  end
end
