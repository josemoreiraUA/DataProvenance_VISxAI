import os
from PIL import Image

def create_animated_gif():
    # 1. Define your 5 specific PNG files in sequence
    # Replace these strings with your exact filenames if they differ
    image_files = [
        "images/promotions01.png",
        "images/promotions02.png",
        "images/promotions03.png",
        "images/promotions04.png"
    ]
    
    # Verify all files exist before processing
    for img_path in image_files:
        if not os.path.exists(img_path):
            print(f"Error: Missing file {img_path} in current directory.")
            return

    print("Loading image sequences...")
    # 2. Open images and convert them to RGB format for clean compression
    images = [Image.open(img).convert("RGB") for img in image_files]
    
    # 3. Define the delay parameter (duration is measured in milliseconds)
    # 4 seconds = 4000 milliseconds
    frame_delay = 4000 
    
    output_filename = "images/promotions.gif"
    
    print(f"Compiling animated GIF with a {frame_delay/1000}s frame delay...")
    # 4. Compile and save the GIF
    images[0].save(
        output_filename,
        save_all=True,
        append_images=images[1:],
        duration=frame_delay,
        loop=0 # 0 means the animated GIF loops infinitely
    )
    
    print(f"Success! Generated animated asset: {output_filename}")

if __name__ == "__main__":
    create_animated_gif()
