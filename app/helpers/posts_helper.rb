require "json"

module PostsHelper
  include SnsShareUrl

  def get_key_emoji post_content
    reg_exp = /\(.*?\)/
    post_content.scan(reg_exp)
  end

  def replace_to_emoticon post_content
    emoticons = File.read("public/emoticons/emoticon.json")
    emoji_array = JSON.parse(emoticons)
    new_content = post_content
    key_arr = get_key_emoji(post_content)
    arr = []

    emoji_array.each do |emoji|
      arr.push(emoji["key"])
    end

    key_not_overlap = key_arr & arr

    src_arr = key_arr & arr

    emoji_array.each do |emoji|
      key_not_overlap.each_with_index do |j, index|
        src_arr[index] = emoji["src"] if j == emoji["key"]
      end
    end

    key_not_overlap.each_with_index do |key, index|
      new_content = new_content.gsub(
        key,
        image_emoticon_tag(src_arr, key, index)
      )
    end

    new_content
  end

  def image_emoticon_tag arr, key, index
    "<img src='#{arr[index]}' title='#{key}' alt='#{key}' class='emoticon' />"
  end

  def reading_time post_content
    words = post_content.split.length
    words_per_minute = 200
    words / words_per_minute
  end

  def share_url post
    sns_share_urls(post)
  end
end
