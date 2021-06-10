class ImageUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  version :thumb do
    process resize_to_fill: [395, 230]
  end

  version :large do
    process resize_to_fill: [835, 470]
  end

  CarrierWave.configure do |config|
    config.cache_storage = :file
  end
end
