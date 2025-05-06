using SkylerCounseling.API.Data;
using SkylerCounseling.API.Dtos;
using Microsoft.EntityFrameworkCore;

namespace SkylerCounseling.API.Services;

public interface ITextService
{
	 Task<AppTextDto> GetText();
}

public class TextService(AppDbContext context) : ITextService
{
	 public async Task<AppTextDto> GetText()
	 {
		 var text = await context.AppTexts.FirstOrDefaultAsync();

		 if (text == null)
		 {
			 throw new Exception("Text not found");
		 }
		 return new AppTextDto
		 {
			 Id = text.Id,
			 Text = text.Text
		 };
	 }
}
