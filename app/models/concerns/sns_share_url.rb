module SnsShareUrl
  include Formattable

  def sns_share_urls(post)
    {
      twitter: format(Settings.share.twitter.share_url, url: post_path(post), text: "ワタリドリ") + "%0A",
      facebook: format(Settings.share.facebook.dig(:share_url), url: post_path(post)),
    }
  end
end
