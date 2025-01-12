'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'

export function ImageUploader({ onImageUpload }) {
  const [images, setImages] = useState([])

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map((file) => URL.createObjectURL(file))
    setImages((prevImages) => [...prevImages, ...newImages])
    onImageUpload([...images, ...newImages])
  }

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index)
    setImages(newImages)
    onImageUpload(newImages)
  }

  return (
    <div className="space-y-4">
      <div>
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Uploaded ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-1 right-1"
              onClick={() => removeImage(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

