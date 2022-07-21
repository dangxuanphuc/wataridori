module SnsShareUrl
  include Formattable

  def sns_share_urls post
    {
      twitter: "#{format(Settings.share.twitter.share_url, url: post_url(post),
      text: 'ワタリドリ')}%0A",
      facebook: format(Settings.share.facebook[:share_url],
                       url: post_url(post), text: "ワタリドリ")
    }
  end
end
