require "json"

module PostsHelper
  def get_key_emoji post_content
    regExp = /\(.*?\)/
    post_content.scan(regExp)
  end

  def replace_to_emoticon post_content
    emoticons = File.read("public/emoticons/emoticon.json")
    emojiArray = JSON.parse(emoticons)
    newContent = post_content
    keyArr = get_key_emoji(post_content)
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

  def reading_time post_content
    minutes = 0
    words = post_content.split(' ').length
    wordsPerMinute = 200
    words / wordsPerMinute
  end
end
